
// exports.JWT_SECRET="afn78wry4r4f7hqST6d78Da7weqfe"
// exports.MONGODBURL="mongodb+srv://haseebasif:cWrVW6IHlpXBbx0m@cluster0.mwvu1.mongodb.net/<dbname>?retryWrites=true&w=majority"
if (process.env.NODE_ENV=="production") {
    module.exports=require("./prod")
}
else{
    module.exports=require("./dev")

}