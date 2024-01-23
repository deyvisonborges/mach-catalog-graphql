## Catalog Service - Graphql

Tecnologias utilizadas nesse projeto:

- Nest.jst
- Graphql
- Apollo Client
- Prisma
- Postgres
- Redis

### Estrutura de pasta

#### App

É a pasta que diz respeito ao conceito de aplicação Nest.js. Ou seja, tudo o que envolve aplicação Nest.js e suas funcionalidades como um todo, ficam nessa pasta.

- `api`

Uma API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permite a comunicação entre diferentes softwares. Pode ser usada para permitir que uma aplicação acesse os recursos ou serviços de outra aplicação, biblioteca ou sistema. Uma API define como os diferentes componentes de software devem interagir.

Um serviço pode ter uma API associada a ele para permitir a comunicação com outras partes do sistema. A API define como os consumidores podem interagir com o serviço.

No contexto da aplicação Nest.js, a pasta `api` faz referência a tudo o que envolve distribuição de recursos através de conceitos comuns como: controllers, inputs, dtos, entre outros...

O diretório `api` deve ser construído como um módulo.

#### Core

É pasta onde fica toda a regra de negócio de forma agnóstica e pode ser implementada em outro tipo de aplicação (Express.js, Koa.js, e outros) pois toda a regra de negócio é desacoplada de framework.
