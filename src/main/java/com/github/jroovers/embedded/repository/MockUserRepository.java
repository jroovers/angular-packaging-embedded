package com.github.jroovers.embedded.repository;

import com.github.jroovers.embedded.dto.UserDTO;
import jakarta.annotation.PostConstruct;
import org.apache.catalina.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class MockUserRepository {

    private List<UserDTO> users;

    @PostConstruct
    private void setup(){
        users = new ArrayList<>();
        users.add(new UserDTO(
                UUID.randomUUID(),
                "henk007",
                42,
                "Henk",
                "Guru"
        ));
        users.add(new UserDTO(
                UUID.randomUUID(),
                "BOB",
                28,
                "Bob",
                "de Vries"
        ));
        users.add(new UserDTO(
                UUID.randomUUID(),
                "Syntax Error",
                35,
                "Jo",
                "Bonten"
        ));
        users.add(new UserDTO(
                UUID.randomUUID(),
                "WordtWakkerMensen",
                45,
                "Willem",
                "Engel"
        ));
        users.add(new UserDTO(
                UUID.randomUUID(),
                "jeroenr",
                29,
                "Jeroen",
                "Roovers"
        ));
    }

    public List<UserDTO> getUsers() {
        return users;
    }


    public Optional<UserDTO> getUserByUuid(UUID fromString) {
        return users.stream().filter(u -> u.uuid().equals(fromString)).findFirst();
    }
}
