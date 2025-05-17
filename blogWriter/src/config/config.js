const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_PROJECT_URL),
    appwriteDatabaseID:String(import.meta.env.VITE_DATABASE_URL),
    appwriteCollectionID:String(import.meta.env.VITE_COLLECTION_URL),
    appwriteBucketID:String(import.meta.env.VITE_BUCKET_URL),
}

export default config