import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:"483939972261-1eirc63n3nnidbiad9k6jeo72af142p4.apps.googleusercontent.com",
            clientSecret:"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"
        })
    ],
    async session({session}){
        const sessionUser = await User.findOne({
            email:session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session
    },
    async signIn({profile}){
        try{
           await connectToDB() 

           const userExists = await User.findOne({
            email:profile.email
           })

           if(!userExists){
            await User.create({
                email:profile.email,
                username:profile.name.replace(" ","").toLowerCase(),
                image:profile.picture
            })
           }

           return true;
        }catch(error){

        }
    }
})

export {handler as GET, handler as POST}