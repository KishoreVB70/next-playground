import { techStackData } from "../data"
export async function GET() {
    return Response.json(techStackData);
}