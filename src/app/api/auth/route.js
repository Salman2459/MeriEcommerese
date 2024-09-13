import { NextResponse } from "next/server"
import fs, { createWriteStream } from 'fs'
import { promisify } from "util"
import { pipeline } from "stream"



export async function POST(req) {

    switch (true) {
        case req.headers.get('content-type').includes("json"): {
            let data = await req.json()
            console.log(data)
            break;
        }
        default:
            let data = await req.formData()

            let dataBhejwao = promisify(pipeline)
            console.log(data)
            
            let meriFile = data.getAll('filess')
            for (let i = 0; i < meriFile.length; i++) {
                dataBhejwao(meriFile[i].stream(), createWriteStream(process.cwd() + '/' + meriFile[i].name))
                console.log(meriFile)   
            
            }
            break;
    }




    return NextResponse.json({
        success: true
    })
}