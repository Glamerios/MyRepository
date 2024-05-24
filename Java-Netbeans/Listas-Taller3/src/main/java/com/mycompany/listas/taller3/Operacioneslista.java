package com.mycompany.listas.taller3;

import java.util.Scanner;

public class Operacioneslista {

    public static Scanner lea = new Scanner(System.in);
    private Nodo cab, ult, p; //Atributos de la clase

    public Operacioneslista() //Metodo constructor
    {
        cab = null;
        ult = null;
    }

    public void CrearLista() {
        int cont = 1, dato;
        int dp;
        System.out.println("Indique la cantidad de datos que desea ingresar en la lista: ");
        dp = lea.nextInt();
        try {
            while (cont <= dp) {
                p = new Nodo(); // pide una nueva dirección memoria
                if (p == null) {
                    System.out.print("No hay espacio de memoria");
                    break;
                } else {
                    System.out.print("Ingrese valor al Nodo: ");
                    dato = lea.nextInt();
                    p.setDato(dato);
                    if (cab == null) {
                        cab = p;
                    } else {
                        ult.setLiga(p);
                    }
                }
                ult = p;
                cont++;
            }
        } catch (Exception e) {
            System.out.print("Error en el Método Crear Lista");
        }
    }

    public void ImprimirLista() {
        p = cab;
        if (cab == null) {
            System.out.print("Lista vacia");
        } else {
            while (p != null) {
                System.out.print(p.getDato() + "->");
                p = p.getLiga();
            }
        }
        System.out.print("\\");
    }

    public static boolean Es_primo(int dato) {
        //void es el único elemento de JAva que no devuelve nada. PAra devolver algo es mejor utilizar otro tipo de método
        
        
        for (int i = 2; i < dato; i++) {
            if ((dato % i) == 0) {
                return false;
            }
            
            
        }
       return true; 
    }
   

    public void Eliminar_primo() {
        Nodo ant = null;
        p = cab;
        while (p != null) {
            if (Es_primo(p.getDato())) {
                if (p == cab) {
                    cab = cab.getLiga();
                    //eliminar();
                    p = cab;

                } else {
                    ant.setLiga(p.getLiga());
                    //eliminar_nodo();
                    p = ant.getLiga();
                }
            } 
            else {
                ant = p;
                p = p.getLiga();
            }
        }
    }
}



