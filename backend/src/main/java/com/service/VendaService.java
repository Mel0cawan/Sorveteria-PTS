package com.sorveteria.service;

import com.sorveteria.model.Venda;
import com.sorveteria.model.Produto;
import com.sorveteria.repository.VendaRepository;
import com.sorveteria.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendaService {
    @Autowired
    private VendaRepository vendaRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    public Venda realizarVenda(Venda venda) {
        Produto produto = produtoRepository.findById(venda.getProduto().getId())
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        if (produto.getEstoque() < venda.getQuantidade()) {
            throw new RuntimeException("Estoque insuficiente");
        }

        produto.setEstoque(produto.getEstoque() - venda.getQuantidade());
        produtoRepository.save(produto);

        return vendaRepository.save(venda);
    }

    public List<Venda> listarVendas() {
        return vendaRepository.findAll();
    }
}
