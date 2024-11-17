package com.gadai.gadai.validators;

import org.springframework.beans.factory.annotation.Autowired;

import com.gadai.gadai.repos.ProdukRepo;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueProdukIdValidator implements ConstraintValidator<IdUnique, String> {

    @Autowired
    private ProdukRepo produkRepo;

    public UniqueProdukIdValidator(ProdukRepo produkRepo) {
        this.produkRepo = produkRepo;
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return !produkRepo.existsById(value);
    }
}
