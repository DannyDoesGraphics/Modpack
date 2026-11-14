
declare module "@package/net/neoforged/neoforge/client/util" {
    /**
     * Debugging helper class.
     */
    export class $DebuggingHelper {
        /**
         * Utility method to release the mouse.
         * 
         * Useful for debugging, as it allows you to move the mouse outside of the game window, if your window manager does not release it automatically, using a conditional breakpoint.
         */
        static releaseMouse(): boolean;
    }
}
