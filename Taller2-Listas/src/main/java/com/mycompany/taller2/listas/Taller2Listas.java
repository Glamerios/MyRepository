/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.taller2.listas;

import java.util.Scanner;
//import java.io.*;

public class Taller2Listas {

    public static Scanner lea = new Scanner(System.in);

    public static void main(String[] args) {
        try {
            //Programacion objetual
            Operlista p = new Operlista(); //Instanciar la clase OperacionesLista
            Operlista q = new Operlista();
            Operlista r = new Operlista();
            System.out.println("Creación de la lista P: ");
            p.CrearLista();
            p.ImprimirLista();
            System.out.println("\n\nCreación de la lista Q");
            q.CrearLista();
            q.ImprimirLista();
            System.out.println("\n\nEl mayor de la lista P es: ");
            p.Mayor();
            System.out.println("\n\nEl mayor de la lista Q es: ");
            q.Mayor();
            System.out.println("\n\nLista P ordenada: ");
            p.OrdenarLista();
            p.ImprimirLista();
            System.out.println("\n\nLista Q ordenada: ");
            q.OrdenarLista();
            q.ImprimirLista();
            System.out.println("\n\nLista resultante");
            r = p.ComunesPyQ(q);
            r.ImprimirLista();
            
            
            /*int opc;
            
            while (true) {
                System.out.print("\n**** MENU PRINCIPAL ****\n");
                System.out.print("\n1.Crear Listas");
                System.out.print("\n2.Imprimir Lista");
                System.out.print("\n3.Salir: ");
                System.out.print("\nOpcion: ");

                opc = lea.nextInt();
                if (opc == 1) {
                    Ob.CrearLista();
                }
                if (opc == 2) {
                    Ob.ImprimirLista();
                }
                if (opc == 3) {
                    break;
                }
            }*/
        } catch (Exception e) {

        }
    }
}
