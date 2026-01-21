import { createClient } from "@supabase/supabase-js"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRja3RwcnpodXBkb3hhdG13bmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MDQxMzMsImV4cCI6MjA4NDQ4MDEzM30.tENGztJS4oMTWRQJ-a1u7kYclNx-H7UYohFNO8Bvu5M"
const supabaseUrl = "https://tcktprzhupdoxatmwnjh.supabase.co"

const supabase = createClient(supabaseUrl , supabaseKey)


export default function UploadFile(file){
    return new Promise(
        (resolve, reject)=>{
            if(file == null){
                reject("No file provided")
                return
            }

                const timestamp = new Data().getTime()
                const fileName = timestamp + "-"+file.name

                supabase.storage.from("IMAGES").upload(fileName , file ,{
                    upsert : false,
                    cacheControl : 3600
                }).then().catch(
                    ()=>{
                        reject("Failed to upload file")
                    }
                
                )
        }
        
    )
}
