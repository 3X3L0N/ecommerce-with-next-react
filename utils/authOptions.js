import User from "@/models/user";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "@/utils/dbConnect";

export const authOptions ={
    session:{
        strategy: "jwt",
    },
    providers:[
        CredentialsProvider({ 
        async authorize(Credentials, req){
            dbConnect();
            const {email, password}= Credentials;
            const user = await User.findOne({email});

            if(!user){
                throw new Error ("Invalid email or password")
            }

            const isPasswordMatched = await bcrypt.compare(password, user.password);
            if (!isPasswordMatched){
                throw new Error("Invalid email or password");
            }
            return user;
        },
    }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/login",
    },
};