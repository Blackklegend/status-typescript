export class body {
  servidor: string;
  workflow: string;
  contabilidade: string;
  empresa: string;
  tipo: string;
  id: string;
  data: string;

  /**
   * @param {string} Servidor
   * @param {string} workflow
   * @param {string} contabilidade
   * @param {string} empresa
   * @param {string} tipo
   * @param {string} id optional
   */
  constructor(servidor: string, workflow: string, contabilidade: string, empresa: string, tipo: string, id?: string) {
    this.servidor = servidor;
    this.workflow = workflow;
    this.contabilidade = contabilidade;
    this.empresa =empresa;
    this.tipo = tipo;
    if (id != null) {
      this.id = id;
    } else {
      this.id = servidor + '-' + workflow;
    }
    this.data = new Date(new Date(new Date().toUTCString().substring(0, 25)).getTime() - 180*60*1000).toTimeString().substring(0,8);
  }
}
