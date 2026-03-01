use crate::models::VersionMismatch;
use anyhow::Result;
use console::{style, Term};
use dialoguer::{theme::ColorfulTheme, Select};
use std::collections::HashMap;

/// Prompt the user for decisions on version mismatches
/// Returns a map of filename -> side decision
pub fn prompt_for_mismatches(
    mismatches: &[VersionMismatch],
    auto_accept: bool,
) -> Result<HashMap<String, String>> {
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

    if auto_accept {
        term.write_line(&style("  (Auto-accept mode enabled - defaulting to 'both')").dim().to_string())?;
        for mismatch in mismatches {
            decisions.insert(mismatch.server_filename.clone(), "both".to_string());
        }
        return Ok(decisions);
    }

    let options = vec!["server", "client", "both", "skip"];

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
            .default(2) // Default to "both"
            .items(&options)
            .interact()?;

        let decision = match selection {
            0 => "server",
            1 => "client",
            2 => "both",
            _ => {
                term.write_line(&style("    Skipped").dim().to_string())?;
                continue;
            }
        };

        decisions.insert(mismatch.server_filename.clone(), decision.to_string());
        
        // If decision is server or both, we need to update the client file too
        if decision == "server" || decision == "both" {
            decisions.insert(mismatch.client_filename.clone(), decision.to_string());
        }

        term.write_line(&format!("    Decision: {}", style(decision).green()))?;
    }

    term.write_line("")?;
    term.write_line(&style("═══════════════════════════════════════════════════════════").yellow().to_string())?;
    term.write_line(&format!(
        "  Processed {} mismatches, {} decisions made",
        style(mismatches.len()).cyan(),
        style(decisions.len() / 2).cyan()
    ))?;
    term.write_line("")?;

    Ok(decisions)
}

/// Show a summary of the side analysis
pub fn show_analysis_summary(
    server_count: usize,
    client_count: usize,
    both_count: usize,
    mismatch_count: usize,
) -> Result<()> {
    let term = Term::stdout();

    term.write_line("")?;
    term.write_line(&style("Side Analysis Summary:").bold().to_string())?;
    term.write_line(&format!(
        "  {} Server-only mods",
        style(server_count).cyan()
    ))?;
    term.write_line(&format!(
        "  {} Client-only mods",
        style(client_count).green()
    ))?;
    term.write_line(&format!(
        "  {} Both (common) mods",
        style(both_count).yellow()
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
