import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App />);
      expect(screen.getByText("Create an Account")).toBeVisible();
    });

    test(`LABEL_USERNAME is visible`, () => {
      render(<App />);
      expect(screen.getByLabelText(/Username/i)).toBeVisible();
      // Use a case-insensitive regex to match the label
    });

    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App />);
      expect(screen.getByPlaceholderText("Type username")).toBeVisible();
    });
  });

  describe('Spanish Language', () => {
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="esp" />);
      expect(screen.getByText("Crear Cuenta")).toBeVisible();
    });

    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="esp" />);
      expect(screen.getByLabelText(/Usuario/i)).toBeVisible();
      // Use a case-insensitive regex to match the label
    });

    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="esp" />);
      expect(screen.getByPlaceholderText("Escriba usuario")).toBeVisible();
    });
  });

  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
      // Implement tests for getEntriesByKeyPrefix
    });
  });
});