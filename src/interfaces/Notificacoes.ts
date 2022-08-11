export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}
export interface Notificacoes {
    titulo: string
    texto: string
    tipo: TipoNotificacao
    id: number
}