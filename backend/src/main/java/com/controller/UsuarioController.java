package com.sorveteria.controller;

import com.sorveteria.model.Usuario;
import com.sorveteria.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.cadastrarUsuario(usuario));
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> autenticarUsuario(@RequestParam String username, @RequestParam String password) {
        return ResponseEntity.ok(usuarioService.autenticar(username, password));
    }
}
