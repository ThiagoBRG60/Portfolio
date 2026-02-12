import { FontAwesomeIcon, TechIcon } from "@/components/Icon/types"

type TechonologyType = {name: string, icon: TechIcon}
type ProjectDetailType = {title: string, description: string}
type FeaturesType = ProjectDetailType & {icon: FontAwesomeIcon}

interface ProjectsProps {
   name: string
   slug: string
   shortDescription: string
   longDescription: string
   imageSrc: string
   technologies: TechonologyType[]
   features: FeaturesType[]
   challenges: ProjectDetailType[]
   learnings: ProjectDetailType[]
   repoUrl: string
   demoUrl?: string
}

const projects: readonly ProjectsProps[] = [
   {
      name: "Ttkdl-Cli",
      slug: "ttkdl-cli",
      shortDescription: "Ferramenta de linha de comando para download de vídeos do TikTok.",
      longDescription: "Ttkdl-Cli é uma ferramenta de linha de comando leve e eficiente para download de vídeos do TikTok a partir de URLs completas ou encurtadas. Suporta downloads simultâneos com controle de concorrência, configuração de pastas de saída e salvamento persistente de preferências.\n\nDesenvolvida sem dependências externas, pesando apenas 44KB, com foco em performance, arquitetura de CLI e compatibilidade multiplataforma.",
      imageSrc: "/images/projects/ttkdl-cli.png",
      technologies: [
         {
            name: "JavaScript",
            icon: "javascript"
         },
         {
            name: "Node.js",
            icon: "nodejs"
         }
      ],
      features: [
         {
            icon: "download",
            title: "Download Flexível de Vídeos",
            description: "Suporta download de um ou múltiplos vídeos simultaneamente, aceitando tanto URLs completas quanto encurtadas, com compatibilidade para diferentes formatos de domínio."
         },
         {
            icon: "layer-group",
            title: "Sistema de Downloads Simultâneos",
            description: "Implementa controle de concorrência permitindo até 5 downloads paralelos, com feedback visual mostrando progresso e velocidade de download em tempo real."
         },
         {
            icon: "folder-open",
            title: "Gerenciamento de Pastas Personalizadas",
            description: "Permite definir caminhos customizados para salvamento dos vídeos, tanto para sessões únicas quanto como configuração padrão persistente entre execuções."
         },
         {
            icon: "droplet-slash",
            title: "Remoção Automática de Marca d'água",
            description: "Os vídeos são baixados sem a marca d'água do TikTok, preservando a qualidade original do conteúdo."
         }
      ],
      challenges: [
         {
            title: "Compatibilidade com Diferentes Formatos de URL",
            description: "Garantir que a CLI funcionasse tanto com URLs completas do desktop quanto com versões encurtadas do mobile, considerando que o TikTok usa diferentes domínios para links curtos."
         },
         {
            title: "Sistema de Concorrência Eficiente",
            description: "Implementar um gerenciamento de downloads simultâneos que fosse rápido e não travasse o código, bloqueando apenas quando necessário e exibindo progresso visual com total baixado e velocidade."
         },
         {
            title: "Suporte Multiplataforma",
            description: "Adaptar a CLI para funcionar em Windows, Linux e macOS, lidando com diferenças nas pastas padrão de usuário e configurando o NPM para distribuir o binário corretamente em cada sistema operacional."
         },
         {
            title: "Zero Dependências Externas",
            description: "Desenvolver todas as funcionalidades sem usar bibliotecas de terceiros, mantendo a CLI extremamente leve com apenas alguns kilobytes e garantindo performance máxima."
         }
      ],
      learnings: [
         {
            title: "Arquitetura de CLI com Node.js",
            description: "Compreensão completa de como criar uma interface de linha de comando do zero, incluindo parsing de argumentos, estruturação de comandos e organização de uma arquitetura escalável."
         },
         {
            title: "Gerenciamento de Downloads com Streams",
            description: "Domínio no uso de streams do Node.js para leitura e escrita eficiente, permitindo controle de múltiplos downloads simultâneos e exibição de informações relevantes ao usuário em tempo real."
         },
         {
            title: "Publicação e Manutenção de Pacotes NPM",
            description: "Processo completo de publicação no registro NPM, incluindo configuração do package.json, gerenciamento de changelogs para versionamento e preparação para futuras atualizações."
         },
         {
            title: "Desenvolvimento Multiplataforma",
            description: "Técnicas para garantir compatibilidade entre diferentes sistemas operacionais, lidando com particularidades de cada ambiente e utilizando recursos nativos do Node.js."
         },
      ],
      repoUrl: "https://github.com/ThiagoBRG60/ttkdl-cli",
   },
   {
      name: "Weather App",
      slug: "weather-app",
      shortDescription: "Aplicação web que fornece informações meteorológicas em tempo real.",
      longDescription: "Aplicação web moderna e responsiva que exibe dados meteorológicos em tempo real para qualquer localidade. Detecta automaticamente a localização do usuário via IP e integra múltiplas APIs para buscar informações de clima, traduzir pesquisas e exibir imagens dos locais.\n\nImplementa cache inteligente de imagens e sistema de notificações toast com fila de execução. O servidor foi desenvolvido em Node.js puro, sem dependências externas, pesando apenas 24KB, com suporte a compressão Brotli para otimização de requests.",
      imageSrc: "/images/projects/weather-app.png",
      technologies: [
         {
            name: "HTML",
            icon: "html"
         },
         {
            name: "CSS",
            icon: "css"
         },
         {
            name: "JavaScript",
            icon: "javascript"
         },
         {
            name: "Node.js",
            icon: "nodejs"
         }
      ],
      features: [
         {
            icon: "location-crosshairs",
            title: "Detecção Automática de Localização",
            description: "Identifica o IP do usuário automaticamente ao acessar a aplicação, exibindo as informações meteorológicas do local correspondente logo na inicialização."
         },
         {
            icon: "cloud-sun",
            title: "Pesquisa de Clima com Imagens Dinâmicas",
            description: "Permite buscar informações meteorológicas de qualquer localidade, exibindo uma foto do local pesquisado junto com dados detalhados do clima como temperatura, umidade, precipitação e velocidade do vento."
         },
         {
            icon: "language",
            title: "Tradução Automática Integrada",
            description: "Traduz automaticamente as pesquisas de português para inglês antes de buscar as informações, garantindo resultados mais precisos e relevantes."
         },
         {
            icon: "box-archive",
            title: "Sistema de Cache de Imagens",
            description: "Armazena imagens de locais já pesquisados anteriormente usando streams de leitura e escrita, acelerando carregamentos futuros e reduzindo requisições desnecessárias."
         },
         {
            icon: "bell",
            title: "Notificações Toast com Fila de Execução",
            description: "Sistema de notificações com gerenciamento de fila que exibe apenas um card por vez, com timer visual e possibilidade de dispensar manualmente, garantindo melhor experiência do usuário."
         }
      ],
      challenges: [
         {
            title: "Integração Eficiente de Múltiplas APIs",
            description: "Garantir que o tempo de requisição das diferentes APIs (clima, tradução, geolocalização e imagens) não fosse excessivo e implementando bloqueio do processo em caso de erros."
         },
         {
            title: "Implementação de Cache com Streams",
            description: "Desenvolver um sistema de cache de imagens usando streams de leitura e escrita, com limpeza automática a cada novo build para manter apenas dados relevantes."
         },
         {
            title: "Sistema de Fila para Notificações Toast",
            description: "Criar um sistema de fila eficiente que permite exibir apenas uma notificação por vez, controlando timers e permitindo que o usuário avance manualmente ou aguarde o término automático."
         },
         {
            title: "Busca de Imagens Sem Limitações de Uso",
            description: "Encontrar uma solução para exibir imagens dos locais pesquisados sem restrições de direitos autorais ou limitações de uso comercial."
         },
         {
            title: "Servidor em Node.js Puro",
            description: "Construir um servidor web completo sem frameworks como Express, implementando compressão Brotli para otimização de arquivos, roteamento manual e tratamento de diferentes tipos de requisições."
         }
      ],
      learnings: [
         {
            title: "Desenvolvimento de Servidor Web do Zero",
            description: "Compreensão profunda de como criar um servidor HTTP eficiente e seguro usando apenas Node.js puro, reduzindo o tamanho final do projeto de vários megabytes para apenas 24KB sem dependências externas."
         },
         {
            title: "Implementação de Cache com Streams",
            description: "Domínio no uso de streams do Node.js para criar sistemas de cache eficientes, gerenciando leitura e escrita de arquivos de forma otimizada e controlando limpeza automática de dados."
         },
         {
            title: "Modificação de Bibliotecas Externas",
            description: "Capacidade de analisar e modificar código de bibliotecas de terceiros para atender necessidades específicas, como adaptar a biblioteca de busca de imagens do DuckDuckGo para requisições mais leves."
         },
         {
            title: "Gerenciamento de Notificações com Fila",
            description: "Técnicas para implementar sistemas de notificações toast com controle de fila, timers visuais e interação do usuário, garantindo uma melhor experiência final."
         }
      ],
      repoUrl: "https://github.com/ThiagoBRG60/Weather-App"
   },
   {
      name: "CRT API Terminal",
      slug: "crt-api-terminal",
      shortDescription: "Terminal interativo com visual retrô que executa comandos e interage com APIs próprias.",
      longDescription: "Aplicação web que simula um terminal interativo retrô com estética de monitor CRT. Permite executar comandos que interagem com rotas de API próprias desenvolvidas em Node.js, incluindo consulta de arquivos, informações do sistema, compressão/descompressão e geração de hashes.\n\nO projeto explora módulos nativos do Node.js, padronização de respostas através de middlewares customizados e oferece feedback sonoro e visual para uma experiência imersiva e nostálgica.",
      imageSrc: "/images/projects/crt-api-terminal.png",
      technologies: [
         {
            name: "HTML",
            icon: "html"
         },
         {
            name: "CSS",
            icon: "css"
         },
         {
            name: "JavaScript",
            icon: "javascript"
         },
         {
            name: "Node.js",
            icon: "nodejs"
         }
      ],
      features: [
         {
            icon: "terminal",
            title: "Terminal Interativo com Estética Retrô",
            description: "Simulação completa de um terminal retrô com execução de comandos em tempo real, incluindo visual de monitor CRT com efeitos de ondulação, cor verde característica e feedback sonoro e visual."
         },
         {
            icon: "server",
            title: "Comandos de Sistema e Manipulação de Arquivos",
            description: "Conjunto de comandos que utilizam módulos nativos do Node.js para exibir informações do sistema operacional (CPU, memória, uptime), além de permitir consulta, leitura e criação de hash de arquivos."
         },
         {
            icon: "file-zipper",
            title: "Compressão e Descompressão de Arquivos",
            description: "Sistema de upload e compressão/descompressão GZIP de arquivos através do terminal, permitindo que o usuário envie arquivos do seu sistema local e receba os resultados processados."
         },
         {
            icon: "font",
            title: "Conversão Para Arte ASCII",
            description: "Integração com Figlet para transformar textos em arte ASCII no estilo de programas antigos de terminal, mantendo a atmosfera nostálgica."
         }
      ],
      challenges: [
         {
            title: "Simulação Visual de Monitor CRT",
            description: "Recriar a estética de um monitor CRT dos anos 80 utilizando CSS, incluindo efeitos de ondulação da tela, sombras para simular curvatura do vidro, fonte monoespaçada característica e cor verde típica de terminais antigos."
         },
         {
            title: "Middleware de Formatação de Respostas",
            description: "Desenvolver um sistema de middleware que intercepta e padroniza todas as respostas do servidor em um formato consistente e legível para exibição no terminal."
         },
         {
            title: "Gerenciamento de Upload e Download de Arquivos via Web",
            description: "Implementar um sistema que permite ao usuário enviar arquivos do sistema local através do navegador para compressão/descompressão no servidor, processá-los e retornar os resultados para a interface."
         },
         {
            title: "Sistema de Comandos Integrado às APIs",
            description: "Criar uma camada de abstração que permite executar comandos diretamente no terminal e usá-los em requisições para as rotas de API correspondentes."
         }
      ],
      learnings: [
         {
            title: "APIs com Módulos Nativos do Node.js",
            description: "Exploração dos módulos nativos do Node.js para criar APIs sem dependências externas, incluindo manipulação de arquivos, compressão GZIP, geração de hashes SHA-256 e consulta de informações do sistema operacional."
         },
         {
            title: "Simulação de Interface de Terminal Retrô",
            description: "Técnicas de CSS para recriar a experiência visual de terminais CRT antigos, incluindo efeitos de ondulação, brilho, curvatura e animações que simulam o comportamento de monitores dos anos 80."
         },
         {
            title: "Padronização e Middlewares Customizados",
            description: "Desenvolvimento de middlewares para interceptar e transformar respostas do servidor, garantindo consistência visual na interface do terminal."
         },
         {
            title: "Manipulação de Arquivos via APIs Web",
            description: "Implementação de upload e processamento de arquivos usando APIs nativas do JavaScript no navegador, incluindo conversão para base64, validação e envio seguro para o servidor para operações de compressão e descompressão."
         }
      ],
      repoUrl: "https://github.com/ThiagoBRG60/CRT-API-Terminal"
   },
   {
      name: "Algorithms Analysis",
      slug: "algorithms-analysis",
      shortDescription: "Aplicação web interativa para visualização de algoritmos de ordenação em tempo real.",
      longDescription: "Aplicação visual e interativa que permite estudar o comportamento de diferentes algoritmos de ordenação através de animações em tempo real.\n\nOferece controles para ajustar o tamanho do array, velocidade de execução e feedback sonoro, possibilitando análise comparativa entre algoritmos como Bubble Sort, Quick Sort, Merge Sort, Heap Sort, Selection Sort e Insertion Sort.",
      imageSrc: "/images/projects/algorithms-analysis.png",
      technologies: [
         {
            name: "HTML",
            icon: "html"
         },
         {
            name: "JavaScript",
            icon: "javascript"
         },
         {
            name: "React",
            icon: "react"
         },
         {
            name: "Styled Components",
            icon: "styled-components"
         }
      ],
      features: [
         {
            icon: "chart-column",
            title: "Visualização de Algoritmos de Ordenação",
            description: "Exibição em tempo real do processo de ordenação de seis algoritmos diferentes, com barras coloridas que representam os valores do array e mudam dinamicamente durante a execução."
         },
         {
            icon: "sliders",
            title: "Controles de Configuração do Array",
            description: "Ajuste do tamanho do array, controle de velocidade de execução dos algoritmos e botão para randomizar os valores, permitindo testar diferentes cenários e comportamentos."
         },
         {
            icon: "volume-high",
            title: "Feedback Sonoro Sincronizado",
            description: "Sistema de áudio que emite sons durante o processo de ordenação, com frequências variadas baseadas na altura das barras, proporcionando experiência audiovisual completa da execução dos algoritmos."
         },
         {
            icon: "circle-half-stroke",
            title: "Interface com Tema Alternável",
            description: "Alternância entre temas claro e escuro para melhor conforto visual durante o uso prolongado da aplicação."
         }
      ],
      challenges: [
         {
            title: "Sincronização Visual e Sonora dos Algoritmos",
            description: "Coordenar a execução dos algoritmos com as atualizações visuais das barras e o feedback sonoro em tempo real, garantindo que as cores das barras refletissem corretamente suas alturas e que os sons correspondessem às trocas de elementos."
         },
         {
            title: "Controle Dinâmico de Velocidade",
            description: "Implementar um sistema que permite ajustar a velocidade de execução dos algoritmos durante a visualização, controlando delays e mantendo a fluidez das animações sem comprometer a sincronia audiovisual."
         },
         {
            title: "Responsividade e Adaptação de Tamanho",
            description: "Adaptar o tamanho máximo dos arrays baseado nas dimensões da tela do usuário, garantindo que a visualização funcionasse bem tanto em dispositivos móveis quanto em monitores grandes, limitando valores para manter performance."
         },
         {
            title: "Adaptação dos Algoritmos Para Visualização",
            description: "Modificar a implementação tradicional dos algoritmos de ordenação para incluir pontos de pausa e atualização da interface, permitindo que cada passo do processo fosse visível e acompanhado de feedback sonoro correspondente."
         }
      ],
      learnings: [
         {
            title: "Implementação de Algoritmos de Ordenação",
            description: "Compreensão do funcionamento interno de seis algoritmos de ordenação diferentes, incluindo suas complexidades, casos de uso e comportamentos em diferentes cenários de entrada."
         },
         {
            title: "Web Audio API Para Feedback Sonoro",
            description: "Uso da Web Audio API para criar um sistema de feedback sonoro dinâmico, gerando frequências variadas sincronizadas com as operações dos algoritmos e proporcionando uma melhor experiência audiovisual."
         },
         {
            title: "Gerenciamento de Estado no React",
            description: "Utilização de Context API, hooks e gerenciamento de estado complexo para controlar múltiplos aspectos da aplicação simultaneamente, incluindo configurações, estado dos algoritmos e sincronização de componentes."
         }
      ],
      repoUrl: "https://github.com/ThiagoBRG60/Algorithms-Analysis",
      demoUrl: "https://main--algorithms-analysis.netlify.app/"
   },
   {
      name: "SpeakNotes",
      slug: "speaknotes",
      shortDescription: "Aplicação web de notas com reconhecimento de voz e sistema de categorização.",
      longDescription: "Aplicação de gerenciamento de notas focada em produtividade e usabilidade, combinando funcionalidades tradicionais de criação e organização com tecnologia de reconhecimento de voz.\n\nPermite categorizar notas em diferentes contextos (Tarefas, Trabalho, Estudos), utilizar comandos de voz para inserção de texto, alternar entre temas claro e escuro e manter todos os dados e preferências salvos localmente no navegador.",
      imageSrc: "/images/projects/speaknotes.png",
      technologies: [
         {
            name: "HTML",
            icon: "html"
         },
         {
            name: "CSS",
            icon: "css"
         },
         {
            name: "JavaScript",
            icon: "javascript"
         },
         {
            name: "React",
            icon: "react"
         }
      ],
      features: [
         {
            icon: "note-sticky",
            title: "Gerenciamento Completo de Notas",
            description: "Sistema para criar, editar e excluir notas com facilidade, oferecendo interface intuitiva para organização rápida de ideias e tarefas do dia a dia."
         },
         {
            icon: "tags",
            title: "Categorização Flexível",
            description: "Organização de notas em categorias como Tarefas, Trabalho, Estudos e outras, permitindo separação clara de contextos e melhor visualização do conteúdo."
         },
         {
            icon: "microphone",
            title: "Reconhecimento de Voz Integrado",
            description: "Utilização da Web Speech API para entrada de texto por voz, tanto para títulos quanto para descrições das notas, facilitando criação de conteúdo sem necessidade de digitação."
         },
         {
            icon: "floppy-disk",
            title: "Persistência Local de Dados",
            description: "Salvamento automático de todas as notas e preferências do usuário no armazenamento local do navegador, garantindo que os dados permaneçam disponíveis entre sessões sem necessidade de backend."
         },
         {
            icon: "circle-half-stroke",
            title: "Alternância de Temas",
            description: "Opção para alternar entre modos claro e escuro, com preferência salva localmente para manter a escolha do usuário em visitas futuras."
         }
      ],
      challenges: [
         {
            title: "Implementação de Reconhecimento de Voz Nativo",
            description: "Integrar a Web Speech API do navegador, lidando com diferentes navegadores, permissões de microfone e garantindo uma melhor experiência durante a captura de voz para títulos e descrições."
         },
         {
            title: "Gerenciamento de Estado Complexo",
            description: "Coordenar o estado de múltiplas notas, categorias, tema atual e menu móvel de forma eficiente, garantindo que alterações em uma parte da aplicação refletissem corretamente em todos os componentes relevantes."
         },
         {
            title: "Persistência Sem Banco de Dados",
            description: "Implementar um sistema de salvamento e recuperação de dados usando apenas LocalStorage, garantindo que todas as notas e preferências fossem mantidas localmente sem necessidade de servidor ou banco de dados externo."
         }
      ],
      learnings: [
         {
            title: "Web Speech API Para Reconhecimento de Voz",
            description: "Uso da API nativa de reconhecimento de voz dos navegadores, incluindo tratamento de permissões, captura de áudio e conversão de fala em texto."
         },
         {
            title: "Persistência com LocalStorage",
            description: "Implementação de armazenamento local no navegador para salvar e recuperar dados e preferências do usuário, utilizando serialização JSON para manter os dados entre sessões."
         },
         {
            title: "Gerenciamento de Estado e Componentização",
            description: "Práticas de arquitetura de componentes React, incluindo separação de responsabilidades, compartilhamento de estado entre componentes e criação de interfaces modulares e reutilizáveis."
         }
      ],
      repoUrl: "https://github.com/ThiagoBRG60/SpeakNotes",
      demoUrl: "https://main--speaknotes.netlify.app/"
   }
] as const

export { projects, type ProjectsProps, type FeaturesType, type ProjectDetailType }