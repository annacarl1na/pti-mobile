import { StyleSheet } from 'react-native';

// Definindo os estilos para os componentes da aplicação
const styles = StyleSheet.create({
  
  // Estilo do container principal
  container: {
    flex: 1, // Ocupará toda a tela disponível
    padding: 16, // Espaçamento interno de 16 unidades
    justifyContent: 'center', // Centraliza os conteúdos verticalmente
    backgroundColor: '#ffffff', // Cor de fundo branca
    fontFamily: 'lucida grande', // Fonte utilizada no texto
  },

  // Estilo para o título principal
  title: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginBottom: 16, // Espaçamento inferior de 16 unidades
    textAlign: 'center', // Centraliza o texto horizontalmente
    color: '#333', // Cor sutil moderna para o texto
    fontFamily: 'lucida grande', // Fonte utilizada
  },

  // Estilo para o nome
  nome: {
    fontSize: 28, // Tamanho maior para o nome
    fontWeight: 'bold', // Negrito
    color: '#1E90FF', // Cor azul
    marginBottom: 160, // Espaçamento inferior grande para posicionar o nome
    textAlign: 'center', // Centraliza o texto
    fontFamily: 'tahoma', // Fonte diferente usada aqui
  },

  // Estilo para os inputs de texto
  input: {
    height: 40, // Altura do input
    borderColor: '#ccc', // Cor da borda cinza claro
    borderWidth: 1, // Espessura da borda
    borderRadius: 8, // Bordas arredondadas para um visual mais moderno
    marginBottom: 12, // Espaçamento inferior de 12 unidades
    paddingHorizontal: 10, // Espaçamento interno nas laterais
  },

  // Estilo para o botão
  button: {
    backgroundColor: '#1E90FF', // Cor de fundo azul
    padding: 12, // Espaçamento interno de 12 unidades
    borderRadius: 8, // Bordas arredondadas para visual moderno
    alignItems: 'center', // Alinha o texto centralizado
    marginBottom: 12, // Espaçamento inferior de 12 unidades
  },

  // Estilo para o texto do botão
  buttonText: {
    color: '#FFF', // Cor branca para o texto
    fontWeight: 'bold', // Negrito
    fontSize: 16, // Tamanho do texto para melhor legibilidade
  },

  // Estilo para links
  link: {
    color: '#1E90FF', // Cor azul para o link
    textAlign: 'center', // Centraliza o texto
    textDecorationLine: 'underline', // Sublinhar o link
  },

  // Estilo para cada item de paciente
  patientItem: {
    padding: 10, // Espaçamento interno de 10 unidades
    backgroundColor: '#FFF', // Fundo branco
    borderBottomWidth: 1, // Borda inferior de 1 unidade
    borderColor: '#ddd', // Cor da borda cinza claro
    borderRadius: 8, // Bordas arredondadas para um visual mais suave
  },
});

export default styles;
