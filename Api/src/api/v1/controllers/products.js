import { Change } from "../../../models/Change.js";
import { Product } from "../../../models/Product.js";
import { updateSchema, scrapeSchema } from "../schemas.js";

export async function scrapeProduct(req, res) {
  try {
    const validation = scrapeSchema.validate(req.body);

    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    const newProduct = await Product.create(req.body);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAll(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getChanges(req, res) {
  const { id } = req.params;
  try {
    const changes = Change.findAll({ where: { id } });
    res.json(changes);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;

  try {
    const validation = updateSchema.validate(req.body);

    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    const [updated] = await Product.update(req.body, { where: { id } });

    // Return updated project incase it got updated
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { id } });
      return res.status(200).json(updatedProduct);
    }

    return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) return res.status(204).send();

    return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
