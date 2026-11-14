import { $SendChangeDescPacket } from "@package/dev/ftb/mods/ftbquests/net";
import { $ServerQuestFile } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/history" {
    export class $HistoryStack {
        createInitialDescPacket(file: $ServerQuestFile): $SendChangeDescPacket;
        addAndApply(file: $ServerQuestFile, event: $QuestBookEditEvent): void;
        tryUndo(file: $ServerQuestFile): boolean;
        tryRedo(file: $ServerQuestFile): boolean;
        constructor();
    }
}
