export class Users {
    private _id: number;
    private _nom: string;
    private _prenom: string;
    private _pseudo: string;
    private _email: string;
    private _password: string;

    constructor() {

    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(value: string) {
        this._nom = value;
    }

    public get prenom(): string {
        return this._prenom;
    }

    public set prenom(value: string) {
        this._prenom = value;
    }

    public get pseudo(): string {
        return this._pseudo;
    }

    public set pseudo(value: string) {
        this._pseudo = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }
}