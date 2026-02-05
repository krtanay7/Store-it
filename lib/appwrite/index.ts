"use server";

import { Account, Client, Databases, Avatars, Storage } from "node-appwrite"
import { appwriteConfig } from "./config"
import { cookies } from "next/headers";


// For general users ( to give a single user data or account data)
export const createSessionClient = async () => {
    const client = new Client()
        .setEndpoint(appwriteConfig.endpointurl)
        .setProject(appwriteConfig.projectId);

    const session = (await cookies()).get('appwrite-session');

    if(!session || !session.value) throw new Error('No session');

    client.setSession(session.value);

    return {
        get account(){
            return new Account(client);
        },
        get databases(){
            return new Databases(client);
        }
    }
}


// For admin level users (to give admin acces , create databases, access them etc.)
export const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(appwriteConfig.endpointurl)
        .setProject(appwriteConfig.projectId)
        .setKey(appwriteConfig.secretKey);
    
    return {
        get account(){
            return new Account(client);
        },
        get databases(){
            return new Databases(client);
        },
        get storage(){
            return new Storage(client);
        },
        get avatars(){
            return new Avatars(client);
        },
    }    
}