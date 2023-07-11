import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}


const Database: DatabaseItem[] = [
    {
        email: "lm.pilati@gmail.com",
        password: "12345",
        permission: PermissionType.ADMIN
    },
    {
        email: "am.pilati@gmai.com",
        password: "12345",
        permission: PermissionType.USER
    }
];

export default Database;