package com.mycompany.listas.taller1;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;

public class ListasTaller1 {

    static Scanner in = new Scanner(System.in);
    static nodo cab, ult, p;

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int op = 0;
        do {
            System.out.println("Elija una opcion");
            System.out.println("1-Crear lista, 2-Imprimir lista, 3-Insertar nodo en la lista antes, 4-Inserta nodo en la lista después 5-Ordenar la lista, 6-Eliminar nodo, 7-Salir:");
            op = Integer.parseInt(in.nextLine());

            switch (op) {
                case 1:
                    agregarnodo();
                    break;
                case 2:
                    imprimir_lista();
                    break;
                case 3:
                    insertar_nodoantes();
                    break;
                case 4:
                    insertar_nododespues();
                    break;
                case 5:
                    ordenar_lista();
                    break;
                case 6:
                    eliminar_nodo();
                    break;
                case 7:
                    break;
            }
        } while (op != 7);
    }

    public static void agregarnodo() {
        int sw = 0;
        int resp;

        System.out.println("Desea crear un nodo en la lista (1-Sí, 2-No)?");
        resp = Integer.parseInt(in.nextLine());
        while (resp == 1 && sw == 0) {
            p = new nodo();
            if (p == null) {
                System.out.println("No hay espacio en memoria");
                sw = 1;
            } else {
                System.out.println("Ingrese un valor al nodo");
                p.dato = Integer.parseInt(in.nextLine());
                if (cab == null) {
                    cab = p;
                } else {

                    ult.p = p;

                }
                ult = p;
                System.out.println("Desea crear un nuevo nodo (1-Si. 2-No)?");
                resp = Integer.parseInt(in.nextLine());
            }

        }
    }

    private static void imprimir_lista() {
        p = cab;
        if (cab == null) {
            System.out.println("Lista vacia");
        } else {
            while (p != null) {
                System.out.println(p.dato);
                p = p.p;
            }
        }
    }

    private static void insertar_nodoantes() {
        int valbus;
        int valins;
        nodo ant=null, n;
        System.out.println("Ingrese el valor a buscar para insertar el dato antes");
        valbus = Integer.parseInt(in.nextLine());
        System.out.println("Ingrese el valor que desea ingresar");
        valins = Integer.parseInt(in.nextLine());
        if (cab == null){
            System.out.println("Lista vacia");
        }
        else {
            p = cab;
            while (p != null && p.dato != valbus){
                ant = p;
                p = p.p;
            }
            if (p == null){
                System.out.println("El valor a buscar no existe");
            }
            else {
                n = new nodo();
                if (n == null){
                    System.out.println("No hay espacio en memoria");
                }
                else {
                    n.dato = valins;
                    if (p == cab){
                        n.p = cab;
                        cab = n;
                    }
                    else {
                        ant.p = n;
                        n.p  = p;
                        
                    }
                }
            }
        }
                
    }
    private static void insertar_nododespues() {
        int valbus;
        int valins;
        nodo ant=null, n;
        System.out.println("Ingrese el valor a buscar para insertar el dato después");
        valbus = Integer.parseInt(in.nextLine());
        System.out.println("Ingrese el valor que desea ingresar");
        valins = Integer.parseInt(in.nextLine());
        if (cab == null){
            System.out.println("Lista vacia");
        }
        else{
            p = cab;
            while (p != null && p.dato != valbus){
                p = p.p;
            }
            if (p == null){
                System.out.println("El valor de referencia no existe");
            }
            else {
                n = new nodo ();
                if (n == null){
                    System.out.println("No hay espacio de memoria");
                }
                else {
                    n.dato = valins;
                    n.p = p.p;
                    p.p = n;
                }
            }
        }
    }

    private static void ordenar_lista() {
        nodo q;
        p =cab;
        int aux;
        if (cab == null){
            System.out.println("Lista vacia");
        }
        else {
            while (p.p != null){
                q = p.p;
                while (q != null){
                    if (p.dato > q.dato){
                        aux = p.dato;
                        p.dato = q.dato;
                        q.dato = aux;
                    }
                    q = q.p;
                }
                p = p.p;
            }
        }
    }

    private static void eliminar_nodo() {
        int valeli;
        nodo ant = null;
        p = cab;
        System.out.println("Ingrese el valor a eliminar");
        valeli = Integer.parseInt(in.nextLine());
        if (cab == null){
            System.out.println("Lista vacia");
        }
        else {
            while (p != null && p.dato != valeli){
                ant = p;
                p = p.p;
            }
            if (p == null){
                System.out.println("El valor no existe");
            }
            else {
                if (p == cab){
                    cab = cab.p;
                }
                else {
                    ant.p = p.p;
                }
               
            }
        }
    }

}
