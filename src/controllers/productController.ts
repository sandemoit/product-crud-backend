import { Request, Response } from 'express';
import prisma from '../services/prismaClient';

export const getProducts = async (_: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, stok } = req.body;
  const product = await prisma.product.create({
    data: { name, description, price, stok },
  });
  res.status(201).json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, stok } = req.body;
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: { name, description, price, stok },
  });
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
