package com.Cars.carsbackend.controller;

import com.Cars.carsbackend.model.Car;
import com.Cars.carsbackend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CarController {
    @Autowired
    private CarRepository carRepository;

    @PostMapping("/car")
    Car newCar(@RequestBody Car newCar) {
        return carRepository.save(newCar);
    }
    @GetMapping("/cars")
    List<Car> getAllCars() {
        return carRepository.findAll();
    }

}
