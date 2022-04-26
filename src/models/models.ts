export interface Todo {
    id: string;
    todo: string;
    status: "Unstarted" | "started" | "Finished";
}