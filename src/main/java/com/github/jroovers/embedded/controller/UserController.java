package com.github.jroovers.embedded.controller;

import com.github.jroovers.embedded.dto.UserDTO;
import com.github.jroovers.embedded.repository.MockUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@CrossOrigin({"http://localhost:8080", "http://localhost:4200"})
public class UserController {

    private final MockUserRepository userRepository;

    @GetMapping
    public List<UserDTO> getUsers(){
        return userRepository.getUsers();
    }

    @GetMapping("/{uuid}")
    public UserDTO getUserByUuid(@PathVariable String uuid){
        return userRepository.getUserByUuid(UUID.fromString(uuid)).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "No user with this UUID"));
    }

}
