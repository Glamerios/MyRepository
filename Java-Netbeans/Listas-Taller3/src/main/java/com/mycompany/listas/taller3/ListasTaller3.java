package com.mycompany.listas.taller3;

import java.util.Scanner;

public class ListasTaller3 {

    public static void main(String[] args) {
        Operacioneslista p = new Operacioneslista();
        System.out.println("Creación de la lista");
        p.CrearLista();
        p.ImprimirLista();
        System.out.println("\n\nLista sin números primos");
        p.Eliminar_primo();
        p.ImprimirLista();
        
    }
}
