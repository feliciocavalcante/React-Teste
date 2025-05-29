import React, { useState } from 'react';
import styles from './Formulario.module.css';
import logoNike from '../../assets/img/logoNike.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import { Link } from 'react-router-dom';
import { supabase } from '../SupabaseClient/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    ddd: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    endereco: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
    complemento: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (name === 'cep') {
      formattedValue = formatCEP(value);
    } else if (name === 'ddd') {
      formattedValue = value.replace(/\D/g, '').substring(0, 2);
    } else if (name === 'telefone') {
      formattedValue = formatPhone(value);
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : formattedValue
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleCepBlur = (e) => {
    const cep = e.target.value;
    if (isValidCEP(cep)) {
      setTimeout(() => {
        if (cep.replace(/\D/g, '') === '60150161') {
          setFormData({
            ...formData,
            endereco: 'Av. Santos Dumont',
            bairro: 'Aldeota',
            cidade: 'Fortaleza',
            estado: 'CE'
          });
        }
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    const requiredFields = ['nome', 'email', 'cpf', 'ddd', 'telefone', 'senha', 'confirmarSenha', 'endereco', 'bairro', 'cep', 'cidade', 'estado'];

    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = 'Campo obrigatório';
        isValid = false;
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
      isValid = false;
    }

    if (formData.cpf && !isValidCPF(formData.cpf)) {
      newErrors.cpf = 'Por favor, insira um CPF válido';
      isValid = false;
    }

    if ((formData.ddd && !isValidDDD(formData.ddd)) || (formData.telefone && !isValidPhone(formData.telefone))) {
      if (formData.ddd && !isValidDDD(formData.ddd)) {
        newErrors.ddd = 'DDD inválido';
      }
      if (formData.telefone && !isValidPhone(formData.telefone)) {
        newErrors.telefone = 'Por favor, insira um telefone válido';
      }
      isValid = false;
    }

    if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
      isValid = false;
    }

    if (formData.cep && !isValidCEP(formData.cep)) {
      newErrors.cep = 'Por favor, insira um CEP válido';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const { nome, email } = JSON.parse(localStorage.getItem('tempUserData')) || {};
      const { senha } = formData;

      if (!email || !nome) {
        alert('Dados temporários não encontrados. Por favor, preencha o formulário novamente.');
        return;
      }

      const { error } = await supabase.auth.signUp({
        email,
        password: senha,
        options: {
          data: {
            nome,
            cpf: formData.cpf,
            telefone: `(${formData.ddd}) ${formData.telefone}`,
            endereco: formData.endereco,
            bairro: formData.bairro,
            cep: formData.cep,
            cidade: formData.cidade,
            estado: formData.estado,
            complemento: formData.complemento,
            newsletter: formData.newsletter
          },
        },
      });

      if (error) {
        alert('Erro ao criar conta: ' + error.message);
      } else {
        alert('Conta criada! Verifique seu e-mail.');
        localStorage.removeItem('tempUserData');
        navigate('/index');
      }
    }
  };

  // Funções auxiliares
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidCPF = (cpf) => {
    const cleanCpf = cpf.replace(/\D/g, '');
    return cleanCpf.length === 11;
  };

  const isValidDDD = (ddd) => {
    const cleanDdd = ddd.replace(/\D/g, '');
    return cleanDdd.length === 2;
  };

  const isValidPhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 8 && cleanPhone.length <= 9;
  };

  const isValidCEP = (cep) => {
    const cleanCep = cep.replace(/\D/g, '');
    return cleanCep.length === 8;
  };

  const formatCPF = (cpf) => {
    let cleanCpf = cpf.replace(/\D/g, '');
    if (cleanCpf.length > 11) cleanCpf = cleanCpf.substring(0, 11);

    if (cleanCpf.length > 9) {
      cleanCpf = cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cleanCpf.length > 6) {
      cleanCpf = cleanCpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cleanCpf.length > 3) {
      cleanCpf = cleanCpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }

    return cleanCpf;
  };

  const formatCEP = (cep) => {
    let cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length > 8) cleanCep = cleanCep.substring(0, 8);

    if (cleanCep.length > 5) {
      cleanCep = cleanCep.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    }

    return cleanCep;
  };

  const formatPhone = (phone) => {
    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length > 9) cleanPhone = cleanPhone.substring(0, 9);

    if (cleanPhone.length > 4) {
      cleanPhone = cleanPhone.replace(/(\d{4,5})(\d{4})/, '$1-$2');
    }

    return cleanPhone;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logoNike} alt="Logo Nike" />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Criar Conta</h1>

            <form id="signup-form" className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formSection}>
                <h2 className={styles.sectionTitle}>Informações Pessoais</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="nome" className={styles.label}>Nome*</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className={errors.nome ? styles.inputError : styles.input}
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                  {errors.nome && <div className={styles.errorMessage}>{errors.nome}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={errors.email ? styles.inputError : styles.input}
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cpf" className={styles.label}>CPF*</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    maxLength={14}
                    className={errors.cpf ? styles.inputError : styles.input}
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                  {errors.cpf && <div className={styles.errorMessage}>{errors.cpf}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Telefone*</label>
                  <div className={styles.phoneGroup}>
                    <input
                      type="text"
                      id="ddd"
                      name="ddd"
                      maxLength={2}
                      className={errors.ddd ? styles.inputError : styles.input}
                      placeholder="DD"
                      value={formData.ddd}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      maxLength={9}
                      className={errors.telefone ? styles.inputError : styles.input}
                      placeholder="Telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  {(errors.ddd || errors.telefone) && (
                    <div className={styles.errorMessage}>
                      {errors.ddd && <span>{errors.ddd}</span>}
                      {errors.telefone && <span>{errors.telefone}</span>}
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="senha" className={styles.label}>Senha*</label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    className={errors.senha ? styles.inputError : styles.input}
                    placeholder="Digite sua senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                  {errors.senha && <div className={styles.errorMessage}>{errors.senha}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="confirmarSenha" className={styles.label}>Confirmar Senha*</label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    className={errors.confirmarSenha ? styles.inputError : styles.input}
                    placeholder="Confirme sua senha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                  />
                  {errors.confirmarSenha && <div className={styles.errorMessage}>{errors.confirmarSenha}</div>}
                </div>
              </div>

              <div className={styles.formSection}>
                <h2 className={styles.sectionTitle}>Endereço</h2>

                <div className={styles.formGroup}>
                  <label htmlFor="cep" className={styles.label}>CEP*</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    maxLength={9}
                    className={errors.cep ? styles.inputError : styles.input}
                    placeholder="00000-000"
                    value={formData.cep}
                    onChange={handleChange}
                    onBlur={handleCepBlur}
                  />
                  {errors.cep && <div className={styles.errorMessage}>{errors.cep}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="endereco" className={styles.label}>Endereço*</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    className={errors.endereco ? styles.inputError : styles.input}
                    placeholder="Digite seu endereço"
                    value={formData.endereco}
                    onChange={handleChange}
                  />
                  {errors.endereco && <div className={styles.errorMessage}>{errors.endereco}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="bairro" className={styles.label}>Bairro*</label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    className={errors.bairro ? styles.inputError : styles.input}
                    placeholder="Digite seu bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                  />
                  {errors.bairro && <div className={styles.errorMessage}>{errors.bairro}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cidade" className={styles.label}>Cidade*</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    className={errors.cidade ? styles.inputError : styles.input}
                    placeholder="Digite sua cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                  {errors.cidade && <div className={styles.errorMessage}>{errors.cidade}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="estado" className={styles.label}>Estado*</label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"
                    className={errors.estado ? styles.inputError : styles.input}
                    placeholder="Digite seu estado"
                    value={formData.estado}
                    onChange={handleChange}
                  />
                  {errors.estado && <div className={styles.errorMessage}>{errors.estado}</div>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="complemento" className={styles.label}>Complemento</label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    className={styles.input}
                    placeholder="Complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroupCheckbox}>
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <label htmlFor="newsletter" className={styles.checkboxLabel}>Desejo receber novidades por e-mail</label>
              </div>

              <button type="submit" className={styles.btnPrimary}>
                Criar Conta
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <img src={logoNikeBranca} alt="Logo Nike Branca" />
        </div>
      </footer>
    </>
  );
};

export default Formulario;