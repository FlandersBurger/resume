angular
	.module('app')
	//AngularJs can't have an arrow function here
	.controller('TenThingsCtrl', function ($scope, BotSvc) {
		$scope.search = {
			name: '',
			values: '',
		};
		BotSvc.getCategories().then(response => {
			$scope.categories = response.data;
			$scope.categoryFilters = $scope.categories.map(category => category);
			$scope.categoryFilters.push('All');
			$scope.categoryFilters.push('Blank');
			$scope.categoryFilter = 'All';
			$scope.updateFilter = 'all';
		});
		BotSvc.getLanguages().then(response => {
			$scope.languages = response.data;
			$scope.languageFilters = $scope.languages.map(language => language);
			$scope.languageFilters.push({ name: 'All', code: 'all' });
			$scope.languageFilter = { name: 'All', code: 'all' };
		});

		$scope.keyDown = e => {
			e = e || window.event;
			switch (e.keyCode) {
				case 9:
					if ($('#new-blurb').is(':focus')) {
						setTimeout(() => {
							$scope.addValue();
						}, 100);
					}
					break;
				case 13:
					if ($('#new-blurb').is(':focus')) {
						$scope.addValue();
					} else if ($('#new-value').is(':focus')) {
						$('#new-blurb').focus();
					}
					break;
				default:
			}
			// use e.keyCode
		};

		$scope.searchName = '';
		$scope.newItem = {};

		$scope.setCategoryFilter = category => ($scope.categoryFilter = category);
		$scope.setUserFilter = user => ($scope.userFilter = user);
		$scope.setUpdateFilter = type => ($scope.updateFilter = type);
		$scope.setLanguageFilter = language => ($scope.languageFilter = language);

		$scope.filteredLists = () => {
			if (!$scope.lists) return [];
			return $scope.lists
				.filter(({ isDynamic }) => {
					if ($scope.updateFilter !== 'all') {
						if (
							($scope.updateFilter === 'static' && isDynamic === true) ||
							($scope.updateFilter === 'dynamic' && isDynamic === false)
						)
							return false;
					}
					return true;
				})
				.filter(({ categories }) => {
					if ($scope.categoryFilter === 'All') {
						return true;
					} else {
						if (categories.length > 0) {
							return categories.indexOf($scope.categoryFilter) >= 0;
						} else {
							return $scope.categoryFilter === 'Blank';
						}
					}
				})
				.filter(({ creator }) => {
					if ($scope.userFilter === 'All') {
						return true;
					} else {
						return creator === $scope.userFilter;
					}
				})
				.filter(({ language }) => {
					if ($scope.languageFilter.code === 'all') {
						return true;
					} else {
						return language === $scope.languageFilter.code;
					}
				});
		};

		$scope.$on('login', _ => {
			$scope.getLists();
		});

		$scope.sort = (sortValue, sortLabel) => {
			$scope.sortLabel = sortLabel;
			if ($scope.sortValue === sortValue) {
				$scope.sortDirection = !$scope.sortDirection;
			} else {
				$scope.sortValue = sortValue;
				$scope.sortDirection = true;
			}
			$scope.sorter = ($scope.sortDirection ? '+' : '-') + $scope.sortValue;
		};

		$scope.sortList = 'value';
		$scope.sortValue = 'date';
		$scope.sortDirection = true;
		$scope.sort('date', 'Creation Date');

		$scope.getLanguageCount = language => {
			if (!$scope.lists) return 0;
			const count = $scope.lists.filter(
				list =>
					($scope.categoryFilter === 'All' ||
						list.categories.includes($scope.categoryFilter)) &&
					(language.code === 'all' || list.language === language.code) &&
					($scope.userFilter === 'All' || list.creator === $scope.userFilter) &&
					($scope.updateFilter === 'all' ||
						list.isDynamic === ($scope.updateFilter === 'dynamic'))
			).length;
			return `${count} - ${Math.round((count / $scope.lists.length) * 100)}%`;
		};

		$scope.getCategoryCount = category => {
			if (!$scope.lists) return 0;
			const count = $scope.lists.filter(
				list =>
					(category === 'All' || list.categories.indexOf(category) >= 0) &&
					($scope.languageFilter.code === 'all' ||
						list.language === $scope.languageFilter.code) &&
					($scope.userFilter === 'All' || list.creator === $scope.userFilter) &&
					($scope.updateFilter === 'all' ||
						list.isDynamic === ($scope.updateFilter === 'dynamic'))
			).length;
			return `${count} - ${Math.round((count / $scope.lists.length) * 100)}%`;
		};

		$scope.getUpdateCount = type => {
			if (!$scope.lists) return 0;
			const count = $scope.lists.filter(
				list =>
					type === 'all' ||
					(list.isDynamic && type === 'dynamic') ||
					(!list.isDynamic && type === 'static')
			).length;
			return `${count} - ${Math.round((count / $scope.lists.length) * 100)}%`;
		};

		$scope.getLists = () => {
			if (!$scope.loading) {
				$scope.loading = true;
				BotSvc.getLists($scope.currentUser).then(({ data }) => {
					$scope.lists = data;
					$scope.userFilters = {};
					$scope.userFilters.All = $scope.lists.length;
					$scope.userFilters = $scope.lists
						.sort((list1, list2) => list1.creator > list2.creator)
						.reduce((users, { creator }) => {
							if (!users[creator]) users[creator] = 0;
							users[creator]++;
							return users;
						}, $scope.userFilters);
					$scope.userCount = Object.keys($scope.userFilters).length;
					$scope.userFilters = sortObject($scope.userFilters, false);
					$scope.userFilter = 'All';
					$scope.loading = false;
				});
			}
		};

		$scope.selectList = list => {
			BotSvc.getList(list).then(({ data }) => {
				$scope.selectedList = data;
			});
		};

		$scope.selectCategory = category => {
			$scope.selectedList.category = category;
			$('#category-select').hide();
		};

		$scope.getCategoryClass = category => {
			return $scope.selectedList &&
				$scope.selectedList.categories.indexOf(category) >= 0
				? 'btn-success'
				: 'btn-default';
		};

		$scope.toggleCategory = category => {
			const categoryIndex = $scope.selectedList.categories.indexOf(category);
			if (categoryIndex >= 0) {
				$scope.selectedList.categories.splice(categoryIndex, 1);
			} else {
				$scope.selectedList.categories.push(category);
			}
		};

		$scope.selectLanguage = language => {
			$scope.selectedList.language = language.code;
			const nonEnglishIndex = $scope.selectedList.categories.indexOf(
				'Non-English'
			);
			if (language.code !== 'EN' && nonEnglishIndex < 0) {
				$scope.selectedList.categories.push('Non-English');
			} else if (language.code === 'EN' && nonEnglishIndex >= 0) {
				$scope.selectedList.categories.splice(nonEnglishIndex, 1);
			}
		};

		$scope.addList = () => {
			const currentLanguage = $scope.selectedList
				? $scope.selectedList.language
				: 'EN';
			$scope.selectedList = {
				name: '',
				creator: $scope.currentUser._id,
				date: new Date(),
				values: [],
				answers: 0,
				isDynamic: true,
				category: '',
				categories: [],
				language: currentLanguage,
			};
		};

		$scope.hasDuplicate = () =>
			$scope.selectedList &&
			$scope.newItem.value &&
			_.some(
				$scope.selectedList.values,
				answer =>
					answer.value.removeAllButLetters() ==
					$scope.newItem.value.removeAllButLetters()
			);

		$scope.addValue = () => {
			if ($scope.newItem.value) {
				if (
					_.some(
						$scope.selectedList.values,
						answer =>
							answer.value.removeAllButLetters() ==
							$scope.newItem.value.removeAllButLetters()
					)
				) {
					alert(`${$scope.newItem.value} is already in the list`);
				} else {
					$scope.newItem.creator = $scope.currentUser._id;
					$scope.selectedList.values.unshift(
						JSON.parse(JSON.stringify($scope.newItem))
					);
					$scope.selectedList.answers++;
					$scope.newItem.value = '';
					$scope.newItem.blurb = '';
					if (
						$scope.selectedList.values.length >= 10 &&
						$scope.selectedList.name &&
						$scope.selectedList.categories.length > 0
					) {
						$scope.saveList($scope.selectedList);
					}
				}
			}
			$('#new-value').focus();
		};

		$scope.reportList = list => {
			list.reported = true;
			BotSvc.reportList($scope.currentUser, list);
		};

		$scope.saveList = list => {
			if (!$scope.saving) {
				list.values = list.values.filter(({ value }) => value);
				if (
					list.values.length >= 10 &&
					list.name &&
					list.categories.length > 0
				) {
					$scope.saving = true;
					BotSvc.saveList($scope.currentUser, list).then(
						({ data }) => {
							if (!$scope.selectedList._id) {
								$scope.lists.unshift(data);
								$scope.selectList(data);
							} else {
								for (let i = 0; i < $scope.lists.length; i++) {
									if ($scope.lists[i]._id === data._id) {
										$scope.lists[i] = data;
										break;
									}
								}
								$scope.selectList(list);
							}
							$scope.saving = false;
						},
						err => {
							console.error(err);
							$scope.saving = false;
						}
					);
				} else if (list.values.length < 10) {
					alert('Lists must contain 10 or more values!');
				} else if (!list.name) {
					flash('#list-name');
				} else {
					flash('.list-category');
				}
			}
		};

		function flash(element) {
			const color = $(element).css('background-color');
			$(element).animate(
				{
					backgroundColor: '#FA8072',
				},
				100,
				() => {
					$(element).animate(
						{
							backgroundColor: color,
						},
						100
					);
				}
			);
		}

		$scope.deleteList = list => {
			if (!list._id) {
				$scope.lists = $scope.lists.filter(({ _id }) => _id);
				$scope.selectedList = null;
			} else {
				if (confirm('Are you sure you want to delete this list?')) {
					BotSvc.deleteList(list).then(response => {
						$scope.getLists();
						$scope.selectedList = null;
					});
				}
			}
		};

		$scope.listButtonClass = list => {
			const values = list.values.length;
			const blurbs = list.blurbs;
			if (values === blurbs && list.description) {
				return 'btn-default';
			} else if (blurbs === 0 && !list.description) {
				return 'btn-warning';
			} else if (blurbs === 0 && list.description) {
				return 'btn-info';
			} else {
				return 'btn-primary';
			}
		};

		$scope.getMoviePics = () => {
			$scope.gettingBlurbs = true;
			BotSvc.getMoviePics($scope.selectedList).then(response => {
				$scope.selectList($scope.selectedList);
				$scope.gettingBlurbs = false;
			});
		};

		$scope.getTVPics = () => {
			$scope.gettingBlurbs = true;
			BotSvc.getTVPics($scope.selectedList).then(response => {
				$scope.selectList($scope.selectedList);
				$scope.gettingBlurbs = false;
			});
		};

		$scope.getActorPics = () => {
			$scope.gettingBlurbs = true;
			BotSvc.getActorPics($scope.selectedList).then(response => {
				$scope.selectList($scope.selectedList);
				$scope.gettingBlurbs = false;
			});
		};

		$scope.getBookPics = () => {
			$scope.gettingBlurbs = true;
			BotSvc.getBookPics($scope.selectedList).then(response => {
				$scope.selectList($scope.selectedList);
				$scope.gettingBlurbs = false;
			});
		};

		$scope.getMusicVideos = () => {
			$scope.gettingBlurbs = true;
			BotSvc.getMusicVideos($scope.selectedList).then(response => {
				$scope.selectList($scope.selectedList);
				$scope.gettingBlurbs = false;
			});
		};

		$scope.getPics = () => {
			$scope.gettingBlurbs = true;
			BotSvc.getPics($scope.selectedList).then(response => {
				$scope.selectList($scope.selectedList);
				$scope.gettingBlurbs = false;
			});
		};
	});
