<template>
	<nav :style="{ background: fundo || '#333' }">
		<ul :style="{ background: fundo || '#333' }" ref="nav">
			<figure class="image-logo" @click="toggleNav">
				<router-link :to="inicio.path">
					<img :src="caminhoImagem" height="40px" width="40px" />
                </router-link>
			</figure>
			<li v-for="(cada, indice) in nav_Links" :key="indice"
				@mouseenter="$event.currentTarget.style.background = hoverfundo || '#999'"
				@mouseleave="$event.currentTarget.style.background = fundo || '#333'" >
				<router-link :to="cada.path" :style="{ color: corLink || '#DDD' }"> 
					{{ cada.texto }}
					<i :class="cada.icon" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
/* eslint-disable */
export default {
	props: ['nav_Links', 'fundo', 'corLink', 'hoverfundo', 'caminhoImagem', 'inicio'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	}
}
</script>

<style scoped lang="scss">
			nav {
				height: 60px;
				width: 100%;
				box-shadow: 2px 2px 2px rgb(9, 138, 15);
				ul {
					display: flex;
					height: 100%;
					align-items: center;
					margin-block-start: 0;
					margin-block-end: 0;
					padding-inline-start: 0;
					box-shadow: 2px 2px 2px rgb(133, 194, 121);

					figure {
						cursor: pointer;
						margin-right: 10px;
					}

					a {
						text-decoration: none;
						display: flex;
						flex-direction: row-reverse;
						align-items: center;
					}

					i {
						margin-right: 10px;
						font-size: 22px;
					}

					li {
						list-style-type: none;
						padding: 10px 20px;
						font-size: 18px;
					}
				}
			}

			@media screen and (max-width: 759px) {
				nav {
					ul {
						position: absolute;
						width: 300px;
						flex-direction: column;
						left: -240px;
						transition: 300ms ease all;
						top: 60px;

						&.active {
							left: 0px;
						}

						figure {
							position: fixed;
							z-index: 1;
							top: 10px;
							left: 2px;
						}

						li {
							width: 100%;
							padding-left: 0;
							padding-right: 0;
						}

						a {
							flex-direction: row;
							margin-left: 20px;
							justify-content: space-between;
							margin-right: 13px;
						}
					}
				}
			}
</style>
