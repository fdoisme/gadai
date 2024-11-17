package com.gadai.gadai.exceptions;

public class ClientException extends Exception {

    public ClientException() {
        super("Terjadi kesalahan input");
    }

    public ClientException(String message) {
        super(message);
    }
}
