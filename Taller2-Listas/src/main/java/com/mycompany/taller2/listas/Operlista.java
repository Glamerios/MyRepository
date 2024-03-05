package com.mycompany.taller2.listas;

import java.util.Scanner;

public class Operlista {

    public static Scanner lea = new Scanner(System.in);

    private Nodo cab, ult, p; //Atributos de la clase

    public Operlista() //Metodo constructor
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

    public void OrdenarLista() {
        Nodo q = null;
        p = cab;
        int aux;
        if (cab == null) {
            System.out.println("Lista vacia");
        } else {

            while (p.getLiga() != null) {
                q = p.getLiga();

                while (q != null) {
                    if (p.getDato() > q.getDato()) {
                        aux = p.getDato();
                        p.setDato(q.getDato());
                        q.setDato(aux);

                    }
                    q = q.getLiga();

                }
                p = p.getLiga();

            }
        }

    }

    public void Mayor() {
        p = cab;
        int may = 0;
        if (cab == null) {
            System.out.println("Lista vacia");
        } else {
            while (p != null) {
                if (p.getDato() > may) {
                    may = p.getDato();
                }
                p = p.getLiga();
            }
        }
        System.out.println(+ may);
    }

    public Operlista ComunesPyQ(Operlista q) {
        int sw = 0;
        Nodo q1 = q.cab;
        p = cab;
        Operlista r = new Operlista();
        if (cab == null || q.cab == null) {
            System.out.println(" una o ambas listas para comparar");
        } else {
            while (p != null && q1 != null) {
                if (p.getDato() == q1.getDato()) {
                    r.crearnodo(p.getDato());
                    p = p.getLiga();
                    q1 = q1.getLiga();
                    sw = 1;
                } else if (p.getDato() < q1.getDato()) {
                    p = p.getLiga();

                } else {
                    q1 = q1.getLiga();
                }
            }
            
        }
        return r;
    }
    

    public void crearnodo(int Nodo) {
        Nodo rnodo = new Nodo(Nodo);

        if (cab == null) {
            cab = rnodo;
        } else {
            ult.setLiga(rnodo);
        }

        ult = rnodo;
    }
}
