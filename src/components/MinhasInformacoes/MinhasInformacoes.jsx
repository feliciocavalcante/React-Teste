import React, { useState, useEffect } from 'react';
import styles from './MinhasInformacoes.module.css';
import logoNike from '../../assets/img/logoNike.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';



const MinhasInformacoesPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome: 'Felicio Cavalcante Feitosa',
    cpf: '123.456.789-01',
    email: 'francisco@gmail.com',
    celular: '(85) 99999-9999',
    endereco: 'Rua João Pessoa, 123',
    bairro: 'Centro',
    cidade: 'Fortaleza',
    estado: 'Ceará',
    cep: '60.000-000'
  });

  const [formData, setFormData] = useState({ ...userInfo });

  // Format functions
  const formatCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.substring(0, 11);
    
    if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpf.length > 3) {
      cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    
    return cpf;
  };

  const formatCEP = (cep) => {
    cep = cep.replace(/\D/g, '');
    if (cep.length > 8) cep = cep.substring(0, 8);
    
    if (cep.length > 5) {
      cep = cep.replace(/(\d{2})(\d{3})(\d{1,3})/, '$1.$2-$3');
    } else if (cep.length > 2) {
      cep = cep.replace(/(\d{2})(\d{0,6})/, '$1.$2');
    }
    
    return cep;
  };

  const formatPhone = (phone) => {
    phone = phone.replace(/\D/g, '');
    if (phone.length > 11) phone = phone.substring(0, 11);
    
    if (phone.length === 11) {
      phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length === 10) {
      phone = phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 6) {
      phone = phone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
    
    return phone;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (name === 'cep') {
      formattedValue = formatCEP(value);
    } else if (name === 'celular') {
      formattedValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({ ...userInfo });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ ...userInfo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ ...formData });
    setIsEditing(false);
    showNotification('Informações atualizadas com sucesso!');
  };

  const showNotification = (message) => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = styles.notification;
    notification.textContent = message;
    
    // Styles for notification
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '4px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      zIndex: '9999',
      opacity: '0',
      transition: 'opacity 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <img src={logoNike} alt="Nike Logo" />
            </div>
            
            <div className={styles.searchBar}>
              <input type="text" placeholder="Busca" />
              <button><i className="fas fa-search"></i></button>
            </div>
            
            <div className={styles.headerActions}>
              <div className={styles.cart}>
                <a href="#"><i className="fas fa-shopping-cart"></i></a>
                <span className={styles.cartCount}>2</span>
              </div>
              <div className={styles.userProfile}>
                <a href="#"><i className="fas fa-user"></i> Olá, Felicio</a>
              </div>
            </div>
          </div>
          
          <nav className={styles.mainNav}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Categorias</a></li>
              <li><a href="#" className={styles.active}>Meus Pedidos</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.accountContainer}>
            <aside className={styles.sidebar}>
              <h3>Meu Perfil</h3>
              <ul>
                <li><a href="#">Meu Perfil</a></li>
                <li><a href="#">Meus Pedidos</a></li>
                <li><a href="#" className={styles.active}>Minhas Informações</a></li>
                <li><a href="#">Métodos de Pagamento</a></li>
              </ul>
            </aside>
            
            <div className={styles.content}>
              <div className={styles.infoHeader}>
                <h2>Minhas Informações</h2>
                <button 
                  className={styles.editBtn} 
                  onClick={handleEdit}
                  disabled={isEditing}
                >
                  Editar
                </button>
              </div>
              
              {!isEditing ? (
                <div className={styles.infoSection}>
                  <div className={styles.infoBlock}>
                    <h3>Informações Pessoais</h3>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Nome:</span>
                      <span className={styles.infoValue}>{userInfo.nome}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>CPF:</span>
                      <span className={styles.infoValue}>{userInfo.cpf}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Email:</span>
                      <span className={styles.infoValue}>{userInfo.email}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Celular:</span>
                      <span className={styles.infoValue}>{userInfo.celular}</span>
                    </div>
                  </div>
                  
                  <div className={styles.infoBlock}>
                    <h3>Informações de Entrega</h3>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Endereço:</span>
                      <span className={styles.infoValue}>{userInfo.endereco}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Bairro:</span>
                      <span className={styles.infoValue}>{userInfo.bairro}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Cidade:</span>
                      <span className={styles.infoValue}>{userInfo.cidade}, {userInfo.estado}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>CEP:</span>
                      <span className={styles.infoValue}>{userInfo.cep}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`${styles.infoSection} ${styles.editForm}`}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.infoBlock}>
                      <h3>Informações Pessoais</h3>
                      <div className={styles.formGroup}>
                        <label htmlFor="nome">Nome:</label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="cpf">CPF:</label>
                        <input
                          type="text"
                          id="cpf"
                          name="cpf"
                          value={formData.cpf}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="celular">Celular:</label>
                        <input
                          type="text"
                          id="celular"
                          name="celular"
                          value={formData.celular}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.infoBlock}>
                      <h3>Informações de Entrega</h3>
                      <div className={styles.formGroup}>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                          type="text"
                          id="endereco"
                          name="endereco"
                          value={formData.endereco}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="bairro">Bairro:</label>
                        <input
                          type="text"
                          id="bairro"
                          name="bairro"
                          value={formData.bairro}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="cidade">Cidade:</label>
                          <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label htmlFor="estado">Estado:</label>
                          <input
                            type="text"
                            id="estado"
                            name="estado"
                            value={formData.estado}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="cep">CEP:</label>
                        <input
                          type="text"
                          id="cep"
                          name="cep"
                          value={formData.cep}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className={styles.formActions}>
                      <button type="submit" className={styles.saveBtn}>
                        Salvar
                      </button>
                      <button 
                        type="button" 
                        className={styles.cancelBtn} 
                        onClick={handleCancel}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img src={logoNikeBranca} alt="Nike Logo Branca" />
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <h3>Informação</h3>
                <ul>
                  <li><a href="#">Sobre Digital Store</a></li>
                  <li><a href="#">Segurança</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Trabalhe conosco</a></li>
                  <li><a href="#">Meus Pedidos</a></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h3>Categorias</h3>
                <ul>
                  <li><a href="#">Camisetas</a></li>
                  <li><a href="#">Calças</a></li>
                  <li><a href="#">Bonés</a></li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Tênis</a></li>
                </ul>
              </div>
              
              <div className={styles.footerColumn}>
                <h3>Contato</h3>
                <p>Av. Santos Dumont, 1510 - 1</p>
                <p>Aldeota, Fortaleza - CE</p>
                <p>CEP: 60150-161</p>
                <p>(85) 3051-3411</p>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <p>&copy; 2025 Digital College</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
          />
          <div className={`${styles.mobileSidebar} ${isMobileMenuOpen ? styles.active : ''}`}>
            <div className={styles.mobileSidebarHeader}>
              <h3>Menu</h3>
              <button onClick={toggleMobileMenu}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Categorias</a></li>
              <li><a href="#">Meus Pedidos</a></li>
              <li className={styles.divider}></li>
              <li><a href="#">Meu Perfil</a></li>
              <li><a href="#">Meus Pedidos</a></li>
              <li><a href="#" className={styles.active}>Minhas Informações</a></li>
              <li><a href="#">Métodos de Pagamento</a></li>
            </ul>
          </div>
        </>
      )}

      <button 
        className={styles.mobileMenuToggle} 
        onClick={toggleMobileMenu}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default MinhasInformacoesPage;