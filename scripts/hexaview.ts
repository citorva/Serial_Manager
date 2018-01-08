class HexaView {
    private main : HTMLElement;
    private hexa : HTMLElement;
    private ascii : HTMLElement;
    private len : number;

    constructor(parent : HTMLElement, appendLast = true) {
        if (!appendLast) parent.innerHTML = "";
        this.main = document.createElement("DIV");
        this.hexa = document.createElement("DIV");
        this.ascii = document.createElement("DIV");

        this.main.id = "hexaview-main";
        this.hexa.id = "hexaview-hexa-edit";
        this.ascii.id = "hexaview-ascii-view";

        this.main.appendChild(this.hexa);
        this.main.appendChild(this.ascii);
    }

    public addHexadecimalVal(data : number) {
        if (data >= 0 && data <= 255) {

        }
        return false;
    }
}