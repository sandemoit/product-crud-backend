import prisma from './prismaClient';

export const getAllProducts = async () => {
  return prisma.product.findMany();
};

export const getProductById = async (id: number) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

export const createProduct = async (data: { name: string; description?: string; price: number; stok: number }) => {
  return prisma.product.create({
    data: {
      ...data,
      description: data.description ?? '', // Set default to empty string if undefined
    },
  });
};

export const updateProduct = async (id: number, data: { name?: string; description?: string; price?: number; stok?: number }) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return prisma.product.delete({
    where: { id },
  });
};
