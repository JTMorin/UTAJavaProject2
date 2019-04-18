export class User {
    constructor(
        public firstName: string,
        public password: string,
        public userName: string,
        public email: string
    ) {}
}
export class UserLogin {
    constructor(
        public firstName: string,
        public password: string
    ) {}
}
