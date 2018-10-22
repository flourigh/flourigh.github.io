# Teste Vertex: Front-End
Desenvolver uma aplicação HTML5

## Instruções
Clone este repositrio em seu projeto para utilizar em seu aplicativo

## Especificações tecnicas
Dependencias:
Material Design Lite 1.3.0
Angular 1.6.9
Google Apis Youtube 3

## Especificações funcionais
### Tela Inicial
Ao executar um Submit no input search-q 
será executada um request na API 
https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={{search}}&key={{key}}
gerando os cards de vídeos de acordo com a busca
gerando as páginas com maxResults de acordo com a API
https://developers.google.com/youtube/v3/guides/implementation/pagination?hl=pt-br

### Tela de detalhes
Ao clicar em um Link de vídeo será carregada com URLRequest os dados do vídeo com a API
https://www.googleapis.com/youtube/v3/videos?id={{videoId}}&part=snippet,statistics&key={{key}}
gerando um URLHistory para retorno de onde parou ao apertar o X do Modalserão carregados no modal as informações
Embed, like, deslike e visualizações