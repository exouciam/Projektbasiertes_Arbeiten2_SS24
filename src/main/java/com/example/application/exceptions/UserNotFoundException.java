package com.example.application.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message) {
        super(message);
    }
}
