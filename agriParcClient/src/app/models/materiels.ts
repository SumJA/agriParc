export class Materiels {
    private _type: string;
    private _model: string;
    private _photo: string;
    private _description: string;
    private _disponibiliteDebut: Date;
    private _disponibiliteFin: Date;
    private _status: string;
    private _localisation: object;

    constructor() {

    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get model(): string {
        return this._model;
    }

    public set model(value: string) {
        this._model = value;
    }

    public get photo(): string {
        return this._photo;
    }

    public set photo(value: string) {
        this._photo = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get disponibiliteDebut(): Date {
        return this._disponibiliteDebut;
    }

    public set disponibiliteDebut(value: Date) {
        this._disponibiliteDebut = value;
    }

    public get disponibiliteFin(): Date {
        return this._disponibiliteFin;
    }

    public set disponibiliteFin(value: Date) {
        this._disponibiliteFin = value;
    }

    public get status(): string {
        return this._status;
    }

    public set status(value: string) {
        this._status = value;
    }

    public get localisation(): object {
        return this._localisation;
    }

    public set localisation(value: object) {
        this._localisation = value;
    }
}