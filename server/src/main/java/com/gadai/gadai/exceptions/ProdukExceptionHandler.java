package com.gadai.gadai.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.gadai.gadai.models.ResponseModel;

@ControllerAdvice
public class ProdukExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        ResponseModel response = new ResponseModel();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            response.setMsg(error.getDefaultMessage());
            response.setStatusCode(400);
        });
        return new ResponseEntity<Object>(response, null, response.getStatusCode());
    }

    @ExceptionHandler({DataIntegrityViolationException.class})
    public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
        ResponseModel response = new ResponseModel();
        response.setMsg(ex.getRootCause().getMessage());
        response.setStatusCode(400);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler({ClientException.class})
    public ResponseEntity<Object> handleClientException(ClientException ex, WebRequest request) {
        ResponseModel response = new ResponseModel();
        response.setMsg(ex.getMessage());
        response.setStatusCode(400);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
