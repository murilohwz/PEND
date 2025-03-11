import 'dart:io'; // Biblioteca de entrada e saída de dados

void main() {
  print("Digite um numero inteiro:");
  int numero = int.parse(stdin.readLineSync()!);

  if (numero % 2 == 0) {
    print("O numero $numero é par.");
  } else {
    print("O numero $numero é impar.");
  }
  
}