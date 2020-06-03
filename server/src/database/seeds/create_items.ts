import Knex from 'knex'

export async function seed(knex: Knex) {
    return await knex('items').insert([
        { title: 'lampadas', image: 'lampadas.svg' },
        { title: 'pilhas e baterias', image: 'baterias.svg' },
        { title: 'papéis e papelão', image: 'papeis-papelao.svg' },
        { title: 'resíduos eletrônicos', image: 'eletronicos.svg' },
        { title: 'resíduos orgânicos', image: 'organicos.svg' },
        { title: 'óleo de cozinha', image: 'oleo.svg' },
    ])
}