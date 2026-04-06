import { createClient } from "@supabase/supabase-js";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRja3RwcnpodXBkb3hhdG13bmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5MDQxMzMsImV4cCI6MjA4NDQ4MDEzM30.tENGztJS4oMTWRQJ-a1u7kYclNx-H7UYohFNO8Bvu5M";
const supabaseUrl = "https://tcktprzhupdoxatmwnjh.supabase.co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function UploadFile(file) {
  return new Promise(async (resolve, reject) => {
    if (!file) {
      reject("No file provided");
      return;
    }

    try {
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}-${file.name}`;

      // Upload file
      const { data, error } = await supabase.storage
        .from("images")
        .upload(fileName, file, { upsert: false, cacheControl: 3600 });

      if (error) {
        reject(error.message);
        return;
      }

      // Get public URL
      const { data: urlData, error: urlError } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

      if (urlError) {
        reject(urlError.message);
        return;
      }

      resolve(urlData.publicUrl);
    } catch (err) {
      reject("Failed to upload file: " + err.message);
    }
  });
}