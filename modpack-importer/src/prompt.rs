use crate::models::{UserDecision, VersionMismatch};
use anyhow::Result;
use console::{style, Term};
use dialoguer::{theme::ColorfulTheme, Select};
use std::collections::HashMap;

/// Prompt the user for decisions on version mismatches
/// Returns a map of base_name -> UserDecision
pub fn prompt_for_mismatches(
    mismatches: &[VersionMismatch],
    auto_accept: bool,
    auto_server: bool,
) -> Result<HashMap<String, UserDecision>> {
    let mut decisions = HashMap::new();

    if mismatches.is_empty() {
        return Ok(decisions);
    }

    let term = Term::stdout();

    term.write_line("")?;
    term.write_line(&style("═══════════════════════════════════════════════════════════").yellow().to_string())?;
    term.write_line(&style("  Version Mismatches Detected").yellow().bold().to_string())?;
    term.write_line(&style("═══════════════════════════════════════════════════════════").yellow().to_string())?;
    term.write_line(&format!("  {} mods have version differences between client and server.", mismatches.len()))?;
    term.write_line("  Please specify which side each mod belongs to.")?;
    term.write_line("")?;

    // auto_server takes precedence over auto_accept
    if auto_server {
        term.write_line(&style("  (Auto-server mode enabled - defaulting all to 'server')").dim().to_string())?;
        for mismatch in mismatches {
            decisions.insert(
                mismatch.base_name.clone(),
                UserDecision {
                    use_server: true,
                    use_client: false,
                },
            );
        }
        return Ok(decisions);
    }

    if auto_accept {
        term.write_line(&style("  (Auto-accept mode enabled - defaulting to 'server')").dim().to_string())?;
        for mismatch in mismatches {
            decisions.insert(
                mismatch.base_name.clone(),
                UserDecision {
                    use_server: true,
                    use_client: false,
                },
            );
        }
        return Ok(decisions);
    }

    let options = vec!["server", "client", "skip"];

    for (i, mismatch) in mismatches.iter().enumerate() {
        term.write_line("")?;
        term.write_line(&format!(
            "  [{} of {}] {}",
            style(i + 1).cyan(),
            style(mismatches.len()).cyan(),
            style(&mismatch.base_name).cyan().bold()
        ))?;
        term.write_line(&format!("    Server: {}", style(&mismatch.server_filename).dim()))?;
        term.write_line(&format!("    Client: {}", style(&mismatch.client_filename).dim()))?;
        term.write_line("")?;

        let selection = Select::with_theme(&ColorfulTheme::default())
            .with_prompt("  Select side")
            .default(0) // Default to "server"
            .items(&options)
            .interact()?;

        let use_server = match selection {
            0 => true,   // server
            1 => false,  // client
            _ => {
                term.write_line(&style("    Skipped").dim().to_string())?;
                continue;
            }
        };

        decisions.insert(
            mismatch.base_name.clone(),
            UserDecision {
                use_server,
                use_client: !use_server,
            },
        );

        let side_str = if use_server { "server" } else { "client" };
        term.write_line(&format!("    Decision: {}", style(side_str).green()))?;
    }

    term.write_line("")?;
    term.write_line(&style("═══════════════════════════════════════════════════════════").yellow().to_string())?;
    term.write_line(&format!(
        "  Processed {} mismatches, {} decisions made",
        style(mismatches.len()).cyan(),
        style(decisions.len()).cyan()
    ))?;
    term.write_line("")?;

    Ok(decisions)
}

/// Show a summary of the side analysis
pub fn show_analysis_summary(
    server_count: usize,
    client_count: usize,
    mismatch_count: usize,
) -> Result<()> {
    let term = Term::stdout();

    term.write_line("")?;
    term.write_line(&style("Side Analysis Summary:").bold().to_string())?;
    term.write_line(&format!(
        "  {} Server mods",
        style(server_count).cyan()
    ))?;
    term.write_line(&format!(
        "  {} Client-only mods",
        style(client_count).green()
    ))?;
    if mismatch_count > 0 {
        term.write_line(&format!(
            "  {} Version mismatches to resolve",
            style(mismatch_count).red()
        ))?;
    }
    term.write_line("")?;

    Ok(())
}
