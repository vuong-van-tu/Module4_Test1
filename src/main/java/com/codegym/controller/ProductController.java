package com.codegym.controller;

import com.codegym.model.Category;
import com.codegym.model.Product;
import com.codegym.service.category.ICategoryService;
import com.codegym.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/list")
    public ModelAndView show(){
        ModelAndView modelAndView = new ModelAndView("/index");
        modelAndView.addObject("products",iProductService.findAll());
        return modelAndView;
    }

    @GetMapping("/categories")
    public ResponseEntity<Iterable<Category>> findAllCategory() {
        List<Category> categories = (List<Category>) iCategoryService.findAll();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
    @GetMapping("/products")
    public ResponseEntity<Iterable<Product>> findAllBlog() {
        List<Product> products = (List<Product>) iProductService.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> findBlogById(@PathVariable Long id) {
        Optional<Product> product = iProductService.findById(id);
        if (!product.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product.get(), HttpStatus.OK);
    }
    @PostMapping("/products")
    public ResponseEntity<Product> save(@RequestBody Product product){
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Product> deleteSmartphone(@PathVariable Long id) {
        Optional<Product> productOptional = iProductService.findById(id);
        if (!productOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iProductService.remove(id);
        return new ResponseEntity<>(productOptional.get(), HttpStatus.NO_CONTENT);
    }


}
