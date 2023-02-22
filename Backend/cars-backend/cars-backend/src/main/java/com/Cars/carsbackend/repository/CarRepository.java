package com.Cars.carsbackend.repository;

import com.Cars.carsbackend.model.Car;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
