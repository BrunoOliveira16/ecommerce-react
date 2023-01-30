[B] Bloco
[E] Elemento
[M] Modificador

*"BEM faz alusão a Programação Orientada a Objeto (POO), uma maneira de descrever a realidade no código, com uma variedade de padrões e uma maneira de pensar nas entidades do programa.*
> - Varga Stepanova, desenvolvedora front-end do projeto.

- Bloco (Block):
    - Entidade independente (bloco de constução)
    - Elemento pai
    - [BLOCO] (.btn)

- Elemento (Elements)
    - Elemento filho
    - Não independente
    - Vinculado a um bloco
    - [BLOCO]__[ELEMENTO] (.btn__price)

- Modificador (Modifier)
    - Modifica um bloco ou elemento
    - Variante para alterar a aparência
        - variar uma propriedade
        - Atribuir um estado
    - [BLOCO]__[ELEMENTO]--[MODIFICADOR]
        - .menu--dark
        - .btn--orange
        - .menu__list--disable