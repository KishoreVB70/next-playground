import "server-only"
export const serverFunction = () => {
    console.log("In the server w/ server util function");
    return "server result";
}