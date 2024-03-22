
import { NextRequest } from "next/server";

export async function GET() {
    console.log("working")
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        return Response.json({ data },{status:200})

    } catch (error) {
        console.error(error);
        return Response.json({ msg:error },{status:500})
        // Handle the error appropriately, e.g., return an error response
    }
  }


  export async function POST(req:NextRequest) {

    
        const {pin}= await req.json();
        console.log("-----------------------------------------------------------")
        console.log(pin);
        
        console.log("working")
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await res.json();
            console.log(data);
            return Response.json({ data },{status:200})
    
        } catch (error) {
            console.error(error);
            return Response.json({ msg:error },{status:500})
            // Handle the error appropriately, e.g., return an error response
        }

  }