package com.github.jroovers.embedded.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

public record UserDTO (
    UUID uuid,
    String username,
    int age,
    String firstName,
    String lastName
) {}
